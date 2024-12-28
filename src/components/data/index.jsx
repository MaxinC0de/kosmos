import React, { useEffect, useState } from 'react';
import { db } from "../../firebase"
import { collection, getDocs } from 'firebase/firestore';

export default function Data() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'your_collection_name'));
                const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setData(fetchedData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="text-white">
            <h1>Data from Firestore</h1>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.name}</li> // Adjust according to your data structure
                    ))}
                </ul>
            )}
        </div>
    );
}