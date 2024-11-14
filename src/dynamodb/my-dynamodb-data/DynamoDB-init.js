var AWS = require("aws-sdk");

AWS.config.update({
    endpoint: "http://172.18.0.2:8000"
});

// console.log(AWS);

var client = new AWS.DynamoDB();

var params = {
    AttributeDefinitions: [
      {
        AttributeName: 'NEXT_PUBLIC_DISCORD_ID',
        AttributeType: 'S'
      },
      {
        AttributeName: 'PUBLIC_KEY',
        AttributeType: 'S'
      },
      {
        AttributeName: 'TOKEN_ID',
        AttributeType: 'N'
      },
      {
        AttributeName: 'TOKEN_TYPE',
        AttributeType: 'S'
      }
    ],
    KeySchema: [
      {
        AttributeName: 'NEXT_PUBLIC_DISCORD_ID',
        KeyType: 'HASH'
      },
      {
        AttributeName: 'CUSTOMER_NAME',
        KeyType: 'RANGE'
      },
      {
        AttributeName: 'TOKEN_ID',
        KeyType: 'RANGE'
      },
      {
        AttributeName: 'TOKEN_TYPE',
        KeyType: 'RANGE'
      }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1
    },
    TableName: 'NEXT_PUBLIC_DISCORD_GATING',
    StreamSpecification: {
      StreamEnabled: false
    }
};

client.createTable(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Table Created", data);
    }
});

client.listTables({Limit: 10}, function(err, data) {
    if (err) {
      console.log("Error", err.code);
    } else {
      console.log("Table names are ", data.TableNames);
    }
});

var writeParams = {
    TableName: 'NEXT_PUBLIC_DISCORD_GATING',
    Item: {
      'NEXT_PUBLIC_DISCORD_ID' : {S: 'JohnnyAppleSeed#6600'},
      'PUBLIC_KEY' : {S: '0xaa931f5ee58735270821b3722866d8882d1948909532cf8ac2b3ef144ae8043363d1d3728b49f10c7cd78c38289c8012477473879f3b53169f2a677b7fbed0c7'},
      'TOKEN_ID' : {N: '1'},
      'TOKEN_TYPE' : {S: 'Ravenclaw'}
    },
    Item: {
        'NEXT_PUBLIC_DISCORD_ID' : {S: 'Oligarch#1234'},
        'PUBLIC_KEY' : {S: '0xaa931f5ee58735270821b372286f88882d1948909532cf8ac2b3ef144ae8043363d1d3728b49f10c7cd7pz38289c8012477473879f3b53159f2a677b7fbed0c7'},
        'TOKEN_ID' : {N: '2'},
        'TOKEN_TYPE' : {S: 'Gryffindor'}
    }
};

client.putItem(writeParams, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Write success", data);
    }
});


const scanParams = {
    TableName: "NEXT_PUBLIC_DISCORD_GATING",
};

client.scan(scanParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
    data.Items.forEach(function (element, index, array) {
      console.log(
          "found",
          element
      );
    });
  }
});