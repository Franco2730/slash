function Header() {
// Entre el nombre del componente siendo fn y el return, podemos escribir código JS. 
  const inputs = input("dime tu name")
  return (
    <div>
        <h1>Desde el header</h1>
    </div>
  )
}

export default Header
