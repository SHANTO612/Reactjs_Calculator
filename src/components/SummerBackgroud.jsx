const SummerBackground = () => {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -inset-[10px] bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300 animate-gradient-x"></div>
        <div className="sun"></div>
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>
      </div>
    )
  }
  
  export default SummerBackground
  
  