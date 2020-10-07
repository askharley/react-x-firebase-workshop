import { db } from '../services/firebase';
import { useState, useEffect } from 'react';

export default function useStreamCollection(path) {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection(path).onSnapshot({
      next: querySnapshot => {
        const updatedCollection = querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
        setCollection(updatedCollection);
      },
      error: (err) => console.log(err)
    });
    return unsubscribe;
  }, [path, setCollection]);

  return collection;
}