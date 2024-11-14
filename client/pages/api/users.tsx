
export async function createUser(user_id: string, public_address?: string, tokens? : [], roles?: []) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_USERS_ENDPOINT}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {   
                _id: user_id,
                public_address: public_address,
                tokens: tokens? tokens : [],
                user_roles: roles? roles : []
            }
        )
    })
    const data = await response.json();
    return data;
}
export async function getUser(user_id: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_USERS_ENDPOINT}/${user_id}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await response.json();
    return data;
}
export async function updateUser(user_id: string, public_address?: string, tokens? : [], user_roles?: []) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_USERS_ENDPOINT}/${user_id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {   
                public_address: public_address? public_address : "",
                tokens: tokens? tokens : [],
                user_roles: user_roles? user_roles : []
            }
        )
    })
    const data = await response.json();
    return data;
}

export async function deleteUser(user_id: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_USERS_ENDPOINT}/${user_id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
    const data = await response.json();
    return data;
}
// get all users
export async function getAllUsers() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_USERS_ENDPOINT}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    const data = await response.json();
    return data;
}
// see if user has a particular role
export async function userHasRole(user_id: string, role_id: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_USERS_ENDPOINT}/${user_id}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await response.json();
    const user_roles_arr = data.user_roles;
    // @ts-ignore
    const role_arr = user_roles_arr.filter((item) => { return item._id === role_id});
    return role_arr
}
// see if user has a particular token
export async function userHasToken(user_id: string, token_id: number) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_USERS_ENDPOINT}/${user_id}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await response.json();
    const user_tokens_arr = data.tokens;
    // @ts-ignore
    const token_arr = user_tokens_arr.filter((item) => { return item._id === token_id});
    return token_arr
}
// empty user tokens
export async function emptyUser(user_id: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_USERS_ENDPOINT}/${user_id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {   
                tokens: [],
                user_roles: []
            }
        )
    })
    const data = await response.json();
    return data;
}

