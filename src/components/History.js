import React from 'react';
import { userLoggedIn } from '../slices/basketSlice';
import { useSelector } from 'react-redux';
import db from '../firebase';

function History() {
  const [isAble, setIsAble] = React.useState(true);
  const [showPrompt, setShowPrompt] = React.useState(false);
  const user = useSelector(userLoggedIn);
  const [itemsList, setItemsList] = React.useState([]);
  const [isSorted, setIsSorted] = React.useState(false);
  const [flattenedHistories, setFlattenedHistories] = React.useState({
    header: [],
    data: [],
    id: '',
  });
  const [input, setInput] = React.useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    setIsAble(false);
  };

  // Search...
  const SearchData = (e) => {
    e.preventDefault();

    let newSearchArr = {
      ...flattenedHistories,
      data: [...flattenedHistories.data],
    };
    const filteredData = newSearchArr.data.filter((item) =>
      item.category === input.toLowerCase()
        ? item
        : item.price.toString() === input
        ? item
        : item.title === input
        ? item
        : null
    );

    setFlattenedHistories({
      header: newSearchArr.header,
      data: filteredData,
    });

    setInput('');
    setIsAble(true);
  };

  // EXTRACTING KEYS OF ITEMS IN HISTORY
  const extractObjectKeys = (object) => {
    let objectKeys = [];
    if (object) {
      Object.keys(object.data).forEach((objectKey) => {
        objectKeys.push(objectKey);
      });
    }
    const sortted = objectKeys.sort();
    return sortted;
  };

  // Getting items from DB
  React.useEffect(() => {
    // DYNAMICALLY GETTING KEYS OF ITEMS IN HISTORY
    const FlattenHistory = (histories) => {
      const history = histories[0];
      let data = [];
      for (const history of histories) {
        if (history !== null) {
          data.push({
            category: history.data.category,
            description: history.data.description,
            hasPrime: `${
              history.data.hasPrime ? 'Has Prime' : 'No Prime Status'
            }`,
            id: history.data.id,
            image: history.data.image,
            price: history.data.price,
            timestamp: `${history.data.timestamp
              .toDate()
              .toDateString()}, ${history.data.timestamp
              .toDate()
              .toLocaleString(
                [],
                { hour: '2-digit', minute: '2-digit', hour12: false },
                'en-GB'
              )}`,
            title: history.data.title,
          });
        }
      }
      if (histories !== null) {
        setFlattenedHistories({
          header: extractObjectKeys(history),
          data: data,
        });
      }
    };

    if (!user) {
      return;
    } else {
      db.collection('histories')
        .doc(`${user}/`)
        .collection('shopping-history')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => {
          const results = snapshot.docs.map((doc) => ({
            // id: doc.id,
            data: doc.data(),
          }));
          if (results) {
            setItemsList(results);
            FlattenHistory(results);
          } else {
            return;
          }
        });
    }
  }, [user]);

  const sortColumn = (sortKey) => {
    let newFlattenedLocation = {
      ...flattenedHistories,
      data: [...flattenedHistories.data],
    };
    if (isSorted === false) {
      newFlattenedLocation.data.sort((a, b) => {
        const valueA = a[sortKey];
        const valueB = b[sortKey];

        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
        return 0;
      });

      setFlattenedHistories(newFlattenedLocation);
      setIsSorted(true);
    } else {
      newFlattenedLocation.data.sort((a, b) => {
        const valueA = a[sortKey];
        const valueB = b[sortKey];

        if (valueA > valueB) return -1;
        if (valueA < valueB) return 1;
        return 0;
      });

      setFlattenedHistories(newFlattenedLocation);
      setIsSorted(false);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <h1 style={{ padding: 5, color: 'gray' }}>
        {itemsList.length === 1
          ? `${itemsList.length} Total History`
          : itemsList.length > 1
          ? `${itemsList.length} Total Histories`
          : itemsList.length === 0
          ? 'You Have No Recorded History Yet.'
          : null}
      </h1>
      {itemsList.length > 0 && (
        <form
          onSubmit={SearchData}
          style={{
            marginTop: 20,
            marginBottom: 20,
            backgroundColor: 'whitesmoke',
            padding: 10,
            display: 'flex',
          }}
        >
          <input
            style={{
              padding: 5,
              border: 'none',
              backgroundColor: 'lightgray',
              borderRadius: 3,
              marginRight: 10,
              outline: 'none',
              flex: 1,
            }}
            type='text'
            value={input}
            onChange={handleChange}
            placeholder='Search by Category, Price or Title...'
          />
          <input
            disabled={isAble}
            style={{
              border: 'none',
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 15,
              paddingRight: 15,
              borderRadius: 3,
              marginLeft: 30,
              marginRight: 20,
            }}
            type='submit'
            onClick={SearchData}
          />
        </form>
      )}
      {showPrompt && (
        <span
          style={{
            textAlign: 'center',
            fontSize: 18,
            color: 'gray',
            textTransform: 'uppercase',
            backgroundColor: 'rgba(0,0,0,0.9)',
            padding: 10,
            position: 'absolute',
            right: 600,
            top: 300,
          }}
        >
          Click header cells to sort columns
        </span>
      )}
      <table>
        <thead
          onMouseOver={() => setShowPrompt(true)}
          onMouseLeave={() => setShowPrompt(false)}
        >
          <tr
            style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}
          >
            {flattenedHistories.header.map((historyHeader, headerIndex) => (
              <th
                onClick={() => sortColumn(historyHeader)}
                style={{
                  padding: '10px',
                }}
                key={headerIndex}
              >
                {historyHeader}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {flattenedHistories.data.map((locationData, locationDataIdx) => (
            <tr style={{ backgroundColor: 'lightgrey' }} key={locationDataIdx}>
              {Object.values(locationData).map((locationValue, valueIdx) => (
                <td style={{ padding: 10 }} key={valueIdx}>
                  {locationValue}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default History;
