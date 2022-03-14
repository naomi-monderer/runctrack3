var annee 
function bissextile(annee)
{
    // const leap = new Date(annee, 1, 29).getDate() === 29;
    if(annee % 4 == 0)
    {
        // console.log(annee + "c'est une année bisex");
        return console.log('true');
    }
    else
    {
        // console.log(annee + "ce n'est pas une année bisex");
        return console.log('false');
    }

}
bissextile(2012);
// bissextile(2013);


