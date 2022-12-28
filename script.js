function descuentos()
{
    let descuento, montoVenta, montoTotal;
    montoVenta = Number(document.formulario1.montoVenta.value);
    descuento=0;
    if(montoVenta>=500&&montoVenta<1500)
        descuento=montoVenta*0.05;
    if(montoVenta>=1500&&montoVenta<5000)
        descuento=montoVenta*0.15;
    if(montoVenta>=5000)
        descuento=montoVenta*0.20;
        montoTotal=montoVenta-descuento;
    document.formulario1.descuento.value = descuento;
    document.formulario1.montoTotal.value = montoTotal;
}