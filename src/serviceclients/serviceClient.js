
export async function getRssYle(url, callback) {
    console.log("url: ", url);
    const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(url)
    };
    try {
        let res = await fetch('http://localhost:3001/api/yle', options);
        let jsonRes = await res.json();
        console.log("jsonRes: ", jsonRes);
        callback(jsonRes);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getRssIl(url, callback) {
    console.log("url: ", url);
    const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(url)
    };
    try {
        let res = await fetch('http://localhost:3001/api/iltalehti', options);
        let jsonRes = await res.json();
        console.log("jsonRes: ", jsonRes);
        callback(jsonRes);
    } catch (error) {
        console.error(error);
        throw error;
    }
}