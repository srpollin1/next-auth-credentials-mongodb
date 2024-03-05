import { lusitana } from '../../../components/fonts';
import Search from '../../../components/search';
import { CrearCliente } from '../../../components/customers/buttons';

function Clientes() {
    return (
      <>
      <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Clientes</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar Clientes..." />
        <CrearCliente />
      </div>
      {/*  <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> */}
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
      </>
    )
  }
  
  export default Clientes