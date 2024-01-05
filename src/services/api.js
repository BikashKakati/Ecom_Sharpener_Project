
const BASE_URL = 'https://the-generics-store-default-rtdb.firebaseio.com';

export async function makePostRequest(contactsDetails,endPoint) {
    try {
        const res = await fetch(`${BASE_URL}/${endPoint}`, {
            method: "POST",
            body: JSON.stringify(contactsDetails),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (!res.ok) {
            throw new Error('something went wrong!');
        }
    } catch (err) {
        console.log(err);
    }
}
