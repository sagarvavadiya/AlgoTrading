 const differentPrc = (entryPrice,exitPrice) =>{
  try {
       let diff = parseFloat(exitPrice) - parseFloat(entryPrice)

    let diffPrc = (diff*100)/parseFloat(entryPrice)

    return diffPrc
  } catch (error) {
    return 0
  }

 }
console.log(differentPrc  (100.00,101.5000000000000))
