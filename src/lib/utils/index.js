
export async function postData(url = '', data = {}, detach=false) {
    const response = await fetch(url, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
    });

    if (detach)
        return await response.json(); 
}
