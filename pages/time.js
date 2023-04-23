function time({time}) {
  return (
    <div>
      <h2>{time}</h2>
    </div>
  );
}

export async function getStaticProps(ctx){


  return {
    props:{
      time : new Date().toISOString()
    }
  }
}

export default time;