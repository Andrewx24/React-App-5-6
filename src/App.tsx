



function App() {
  
  const isLoggedIn = false;

  const log=true;
let Pet=false;
  return (
    <>
    <div className="text-center text-5xl">
    <h1> Hello App</h1>
    <>
    {Pet ? <p> Cat</p> : <p> Dog</p>}
    </>
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
        </div>
        <div>

          {log ? <h1> Name please</h1> : <h1> Please log in.</h1>}
        </div>
    </div>
    </>
  )
}

export default App
