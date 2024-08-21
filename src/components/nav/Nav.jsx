import './styles.css'

export const Nav = () => {
  return (
     <nav className='nav_container'>
      <ul className='list_nav'>
       <li><a href='#'><img className='icon_nav'  src="/folhaOne.png" alt="Home"/>Home</a></li>
         <li><a href='#'><img className='icon_nav'  src="/folhaOne.png" alt="Home"/>Products</a></li>
        <li><a href='#'><img className='icon_nav'  src="/folhaOne.png" alt="Home"/>Shop</a></li>
        <li><a href='#'><img className='icon_nav'  src="/folhaOne.png" alt="Home"/>Contact</a></li> 
      </ul>
    </nav>
  )
}
