import { Text } from 'preact-i18n';

const EmptyState = ({ children, ...props }) => (
  <div
    style={{
      width: '60%',
      maxWidth: '400px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '80px',
      textAlign: 'center'
    }}
  >
    <img
      src="/assets/images/undraw_personalization.svg"
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        maxWidth: '300px'
      }}
    />
    <p style={{ marginTop: '20px' }}>
      <Text id="dashboard.emptyDashboardSentenceTop" />
      <br /> <Text id="dashboard.emptyDashboardSentenceBottom" />
    </p>
  </div>
);

export default EmptyState;
