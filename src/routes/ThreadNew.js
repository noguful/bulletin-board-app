export const ThreadNew = () =>{

  function handleClick() {

    const data = {
      title: document.querySelector('input[name="name"]').value,
    };

    fetch('https://railway.bulletinboard.techtrain.dev/threads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <section>
      <h2>スレッド新規作成</h2>
      <form>
        <input type="text" name="name" />
        <button type="button" onClick={handleClick}>作成</button>
      </form>
    </section>
  );
}
