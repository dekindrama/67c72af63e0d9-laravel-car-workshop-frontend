import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';

const Page = () => {
    const titlePage = 'Dashboard';
    const titleNavigation = 'Dashboard';

    return (
        <DashboardLayout>
            <>
                <Head title={titlePage} />

                <h1>{titleNavigation}</h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nobis sunt ex, quidem maiores quasi ea incidunt velit quam
                    iste quod fugiat et voluptas doloremque natus pariatur eos
                    dolorem sapiente sit! Dolorem earum a, nesciunt tenetur
                    accusantium placeat architecto velit cumque. Voluptates
                    illum temporibus natus. Ut minima atque eius. Ullam ratione
                    quaerat porro, corporis earum ipsum quis obcaecati itaque
                    repellendus consequatur quidem quo magni eligendi
                    consequuntur modi consectetur labore inventore! Quidem, et,
                    iste magni laborum molestiae corporis veritatis eos
                    recusandae at, animi necessitatibus quia! Sequi minima et
                    suscipit nihil consequuntur id ipsa temporibus nulla itaque!
                    Sed laboriosam officia libero veniam ad?
                </p>
                <div className="mockup-code">
                    <pre data-prefix="$">
                        <code>npm i daisyui</code>
                    </pre>
                    <pre data-prefix=">" className="text-warning">
                        <code>installing...</code>
                    </pre>
                    <pre data-prefix=">" className="text-success">
                        <code>Done!</code>
                    </pre>
                </div>

                <blockquote>
                    <p>
                        Why is Tailwind removing the default styles on my{' '}
                        <code>h1</code> elements? How do I disable this? What do
                        you mean I lose all the other base styles too?
                    </p>
                </blockquote>
            </>
        </DashboardLayout>
    );
};

export default Page;
