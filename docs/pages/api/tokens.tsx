
export async function createToken(token_id: number, token_roles: [], type: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_TOKENS_ENDPOINT}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {   
                _id: token_id,
                token_roles: token_roles,
                type: type
            }
        )
    })
    const data = await response.json();
    return data;
}

export async function getToken(token_id: number) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_TOKENS_ENDPOINT}/${token_id}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await response.json();
    return data;

}
export async function updateToken(token_id: number, token_roles: [], type: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_TOKENS_ENDPOINT}/${token_id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {   
                token_roles: token_roles,
                type: type,
            }
        )
    })
    const data = await response.json();
    return data;
}
export async function deleteToken(token_id: number) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_TOKENS_ENDPOINT}/${token_id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
    const data = await response.json();
    return data;
}
export async function getAllTokens() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_TOKENS_ENDPOINT}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    const data = await response.json();
    return data;
}
