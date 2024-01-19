const Bank = ({obj, setObj}) => {
    
    const einzahlen = () => {
        let eingabeCopy = Number(obj.eingabe)
        let ksCopy = Number(obj.kontostand)
        let neueObj = {...obj, kontostand: eingabeCopy + ksCopy, eingabe: ''}

    setObj(neueObj)
}

    const auszahlen = () => {
        let eingabeCopy = Number(obj.eingabe)
        let ksCopy = Number(obj.kontostand)
        let neueObj = {...obj, kontostand: ksCopy - eingabeCopy, eingabe: ''}
        if (neueObj.kontostand < 0) {
            console.log(neueObj);
            window.alert('Ein Fall für Peter Zwegert')
            neueObj.kontostand = ksCopy
        }

    setObj(neueObj)
    }

    return ( 
        <>
        <div>
            <h1 className="header">Banana Bank</h1>
            <main>
                <h2>Girokonto</h2>
                <h3>{obj.kontostand} €</h3>
                <input 
                type="number" 
                name="val" 
                id="val" 
                placeholder="Betrag in €" 
                value={obj.eingabe}
                onInput={(event) => setObj({...obj, eingabe: event.target.value})}/>
                <div>
                    <button onClick={einzahlen}>Einzahlen</button>
                    <button onClick={auszahlen}>Auszahlen</button>
                </div>
            </main>
        </div>
        </>
     );
}
 
export default Bank;