const RedirectingToBlockstack = ({ children, ...props }) => (
  <div
    class="dimmer active"
    style={{
      height: '300px'
    }}
  >
    <div class="loader" />
  </div>
);

export default RedirectingToBlockstack;
