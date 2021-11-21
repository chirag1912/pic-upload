import { useState } from 'react'
import { Storage } from 'aws-amplify';

function App() {
  const [file, setFile] = useState();
  const [uploaded, setUploaded] = useState(false);

  return (
    <div className="App">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={async () => {
        const storageResult = await Storage.put('Image', file, {
          level: 'public',
          type: 'image/png'
        })
        // Insert predictions code here later
        setUploaded(true)
        console.log(storageResult);
      }}>Upload and Check the Object</button>

      <div>
        {uploaded
          ? <div>Your image is uploaded! </div>
          
          : <div>Upload a photo to get started</div>}
      </div>
    </div>
    );
}

export default App;