export const metadata = {
  title: "Employement History | Pete's Portfolio"
};

export default function Page() {
    return (
      <>
        <h1>Employment History</h1>
        <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/`}>RETURN HOME</a>
      </>
    );
}
