interface CertificationI {
  logo: string;
  certificationName: string;
  agency: string;
  years: string;
}

const Certification = (props: CertificationI) => {
  return (
    <div className='column-3 text-primary py-4 px-4 flex flex-row gap-4'>
      <div className='basis-4/12 text-right'>
        <img className='w-14 inline-block' alt={`${props.logo} logo`} src={props.logo}></img>
      </div>
      <div className='basis-8/12'>
        <p className='font-normal text-sm pb-1'>{props.certificationName}</p>
        <p className='font-light text-xs'>{props.agency} | {props.years}</p>
      </div>
    </div>
  )
}

export default Certification