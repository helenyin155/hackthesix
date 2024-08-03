import { useRouter } from 'next/router';

const Goal = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Goal Page: {id}</h1>
      <p>This is the page for goal {id}.</p>
    </div>
  );
};

export default Goal;
