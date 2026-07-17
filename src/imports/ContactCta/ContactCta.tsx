function Heading() {
  return (
    <div className="absolute h-[119px] left-0 top-0 w-[799.633px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[120px] left-0 not-italic text-[100px] text-white top-[-0.5px] tracking-[-4px] whitespace-nowrap">HABLEMOS.</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[94.5px] left-0 top-[167px] w-[380px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[31.5px] left-0 not-italic text-[18px] text-white top-[0.5px] w-[368px]">Cuéntanos sobre tu organización. Te mostraremos cómo LPG puede posicionarte donde mereces estar.</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.3)] top-[0.5px] tracking-[1.8px] uppercase whitespace-nowrap">EMAIL</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-white top-[-1px] whitespace-nowrap">contacto@libretapersonal.co</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[66px] relative shrink-0 w-[799.633px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start pt-[21px] relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.3)] top-[0.5px] tracking-[1.8px] uppercase whitespace-nowrap">TELÉFONO</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-white top-[-1px] whitespace-nowrap">+57 (311) 234-5678</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[66px] relative shrink-0 w-[799.633px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start pt-[21px] relative size-full">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.3)] top-[0.5px] tracking-[1.8px] uppercase whitespace-nowrap">CIUDADES</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-white top-[-1px] whitespace-nowrap">Cali · Bogotá · Medellín</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-[799.633px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start pt-[21px] relative size-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[238px] items-start left-0 top-[325.5px] w-[799.633px]" data-name="Container">
      <Container2 />
      <Container5 />
      <Container8 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[563.5px] left-[61.5px] top-[120px] w-[799.633px]" data-name="Container">
      <Heading />
      <Paragraph />
      <Container1 />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.35)] top-[0.5px] tracking-[1.8px] uppercase whitespace-nowrap">Nombre completo</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pb-[14px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Juan García</p>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[69px] items-start left-0 top-0 w-[424.367px]" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.35)] top-[0.5px] tracking-[1.8px] uppercase whitespace-nowrap">Compañía u organización</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pb-[14px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Nombre de la empresa</p>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[69px] items-start left-0 top-[101px] w-[424.367px]" data-name="Container">
      <Label1 />
      <TextInput1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.35)] top-[0.5px] tracking-[1.8px] uppercase whitespace-nowrap">Correo electrónico</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Email Input">
      <div className="content-stretch flex items-center overflow-clip pb-[14px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">correo@empresa.com</p>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[69px] items-start left-0 top-[202px] w-[424.367px]" data-name="Container">
      <Label2 />
      <EmailInput />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.35)] top-[0.5px] tracking-[1.8px] uppercase whitespace-nowrap">Mensaje</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="h-[123px] relative shrink-0 w-full" data-name="Text Area">
      <div className="content-stretch flex items-start overflow-clip pb-[14px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Light',sans-serif] font-light leading-[27px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Cuéntanos sobre tu desafío...</p>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[156px] items-start left-0 top-[303px] w-[424.367px]" data-name="Container">
      <Label3 />
      <TextArea />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[191.3px] size-[16px] top-[20.5px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3 13L13 3M13 11V3H5" id="Vector" stroke="var(--stroke-0, #0011B2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#afa] h-[57px] left-0 top-[491px] w-[247.305px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Black',sans-serif] font-black leading-[21px] left-[110px] not-italic text-[#0011b2] text-[14px] text-center top-[18px] tracking-[0.84px] uppercase whitespace-nowrap">Enviar mensaje</p>
      <Icon />
    </div>
  );
}

function Form() {
  return (
    <div className="absolute h-[548px] left-[1048px] top-[120px] w-[424.367px]" data-name="Form">
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Button />
    </div>
  );
}

export default function ContactCta() {
  return (
    <div className="bg-[#0011b2] relative size-full" data-name="ContactCTA">
      <Container />
      <Form />
    </div>
  );
}