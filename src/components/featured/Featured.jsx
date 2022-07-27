import "./featured.css"

export const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/square250/654416.webp?k=2d4f5298af4f498d7f410feb8a1ee632d9babc6bb4c1a8d0648405482a5c9e55&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Seoul</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/region/square250/66542.webp?k=6e83f27d3ae808050fd7b41ba362abb77df4f26c4f036ad80ef3010ac359bf74&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Jeju</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/square250/970413.webp?k=11d28939210dd15bea92be980ba39bc4673a892d6440af69f98033098b4c0def&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Busan</h1>
          <h2>123 properties</h2>
        </div>
      </div>
    </div>
  )
}
