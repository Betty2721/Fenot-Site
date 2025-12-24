const FormDetail = () => {
  return (
    <div className="bg-white flex flex-col items-center min-h-screen">
      {/* Header */}
      <section className="text-center py-12 px-6">
        <p className="text-sm font-medium text-blue-600 mb-3">Register</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Register Form
        </h1>
        <p className="text-lg text-gray-600">
          Register to be part of our sunday school team.
        </p>
      </section>

      {/* Map */}
      <div className="w-full md:w-2/3 shadow-xl shadow-blue-900/20 border bg-[#10289116] border-gray-300 rounded-lg overflow-hidden mb-20">
        <section className=" py-20">
          <h2 className="text-3xl font-bold text-center mb-8">Join Our Team</h2>

          <div className="w-full h-[900px]  rounded-xl overflow-hidden">
            <iframe
              title="Google Form"
              src="https://docs.google.com/forms/d/1XIpr_BflkUuu76pVFuRbE68ivlXZrQuecCNdwnHBC_0/viewform?embedded=true"
              className="w-full h-full border-0 "
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FormDetail;
