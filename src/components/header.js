const Header = (props) => {
  // bg_colors array
  const bg_colors = ['red', 'blue', 'aqua', 'brown', 'pink', 'yellow', 'green', 'orange', 'gold', 'cyan', 'azure', 'coral']

  return (
    <>
      <header style={{ background: `${props.bg_color === 'white' ? 'white' : props.bg_color}`, color: `${props.dark_mode ? 'white' : 'black'}` }}>
        <div className="logo">
          <img src={'../images/logo.png'} width="100px" alt="" />
        </div>
        <div className="brand">
          <h1>TheProductZon</h1>
          <input style={{ display: `${props.active_search ? 'flex' : 'none'}` }} className='search' placeholder=' Search a product' onChange={props.keywords} />
          <p>{props.matches === true ? "" : "No matches found. Below are all products"}</p>
        </div>
        <div className='menu'>
          <i className="fa fa-search" onClick={props.change_search}></i>
          <i title='Change Page Color' className="fa fa-paint-brush" onClick={props.choose_bg_color}></i>
          <i title='Change Mode' className={`fa ${props.dark_mode ? "fa-sun-o" : "fa-moon-o"}`}
            onClick={props.change_mode}
          ></i>
          <i className="fa fa-shopping-cart"></i>
        </div>
      </header>
      <div className='bg_colors' style={{ display: `${props.active ? 'flex' : 'none'}` }}>
        {bg_colors.map((bg_color) => (
          <div key={bg_color} className='one-color' style={{ backgroundColor: `${bg_color}` }}
            onClick={() => { props.change_bg_color(bg_color) }}
          >
            {bg_color}
          </div>
        )
        )
        }
      </div>
    </>
  )
}

export default Header