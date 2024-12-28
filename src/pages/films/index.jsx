import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../firebase";

export default function Films() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const snapshot = await getDocs(collection(db, 'films')); // Ensure this matches your Firestore collection
                const filmsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                console.log("Fetched Data:", filmsData); // Log fetched data
                setData(filmsData);
            } catch (err) {
                console.error("Error fetching data:", err); // Log error details
                setError(err.message);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <div className='text-white'>
            <h1>Data from Firestore</h1>

            {data.map(e => (
                <div className="border-white border-2 rounded-xl p-2 w-[30vw]">
                    <ul>
                        <li key={e.id}>{e.nom}</li>
                        <li key={e.id}>{e.réalisateur}</li>
                        <li key={e.id}>{e.name}</li>

                    </ul>
                </div>
            ))}
        </div>
    )
}
