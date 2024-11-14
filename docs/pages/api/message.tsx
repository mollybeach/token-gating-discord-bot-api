const messages: string[] = [];
export function assignMessage (role_name: string, role_type: string, writeType: boolean, readType: boolean) {

    function roleRemoveMessage (role_name: string)  {
        return `You have been Removed from the ${role_name} Level role for Token Type ${role_type}!
        You no longer are in possession of enough tokens to hold this role! !!`;
    };
    function roleAssignMessage (role_name: string) {
        return `You have been Granted the ${role_name} Level role! Level role for Token Type ${role_type}!`;
    };
    
    if (writeType && !readType) {
        messages.push(roleAssignMessage(role_name));
    } else if (!readType && !writeType){
        messages.push(roleRemoveMessage(role_name));
    }

    if (readType) {
        return messages.join(" ");
    }
}


