import { Spinner } from "@heroui/spinner";

const loading = () => {
    return (
        <section className="h-screen text-center pt-24">
            <Spinner color="primary" label="Loading" />
        </section>
    );
}

export default loading;