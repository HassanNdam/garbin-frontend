import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="container mx-auto mt-20 mb-40 flex items-center justify-center ">
      <div className="bg-white shadow-md rounded-lg p-8 flex flex-col lg:flex-row gap-6">
        {/* Text bloc */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 mt-20 ">Nous contacter</h2>
          <p className="text-gray-700">
            Si tu rencontres un souci ou si tu as la moindre question, n'hésite
            pas à nous envoyer un message. On est là pour t'aider ! ✌️
          </p>
        </div>

        {/* Form bloc */}
        <div className="flex-1">
          <form className="space-y-4 mt-20 mb-20">
            <div>
              <input
                type="email"
                id="email"
                className="border rounded-lg p-2 w-full"
                placeholder="E-mail*"
                required
              />
            </div>
            <div>
              <textarea
                id="message"
                className="border rounded-lg p-2 w-full h-48"
                placeholder="Message*"
                required
              ></textarea>
            </div>
            <Button className="px-10 py-6 text-2xl  font-normal" type="submit">
              Envoyer
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
