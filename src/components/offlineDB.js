// Function to save items to IndexedDB when offline
export const saveItemOffline = async (item) => {
    const db = await openDatabase();
    const tx = db.transaction('offlineItems', 'readwrite');
    const store = tx.objectStore('offlineItems');
    await store.add(item);
    await tx.complete;
  };
  
  // Function to get offline items from IndexedDB
  export const getOfflineItems = async () => {
    const db = await openDatabase();
    const tx = db.transaction('offlineItems', 'readonly');
    const store = tx.objectStore('offlineItems');
    const items = await store.getAll();
    await tx.complete;
    return items;
  };
  
  // Function to clear offline items from IndexedDB after syncing
  export const clearOfflineData = async () => {
    const db = await openDatabase();
    const tx = db.transaction('offlineItems', 'readwrite');
    const store = tx.objectStore('offlineItems');
    await store.clear();
    await tx.complete;
  };
  
  // Function to open the IndexedDB
  const openDatabase = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('shoppingListDB', 1);
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains('offlineItems')) {
          db.createObjectStore('offlineItems', { keyPath: 'id', autoIncrement: true });
        }
      };
  
      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
  
      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  };
  