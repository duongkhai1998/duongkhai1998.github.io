// bt1
function check_number(number)
{
    if (number % 3 == 0 && number % 5 == 0){
       console.log('fizbuzz');
    }
    else if (number % 5 == 0) {
      console.log( 'fizz');
    }
    else if (number % 3 == 0){
        console.log('buzz')
    }
  
       
    }
    check_number(15)
    check_number(9)
    check_number(10)
// bt2
function giai_pt_bac_nhat(a, b)
{
    if (a == 0 && b == 0){
        console.log('Phương trình vô số nghiệm');
    }
    else if (a != 0 && b == 0){
        console.log('Phương trình có nghiệm x = 0');
    }
    else if (a == 0 && b != 0){
        console.log("Phương trình vô nghiệm");
    }
    else {
        console.log('Phương trình có nghiệm x = ' + (-b/a));
    }
}
giai_pt_bac_nhat(2,0)
giai_pt_bac_nhat(0,0)
giai_pt_bac_nhat(2,7)
giai_pt_bac_nhat(0,4)
// bt3
function ptbac2(a, b,c)
{
    if(a==0){
        if(b==0){
            console.log('pt vo nghiem')
        } else {
        x = -c/b;
        console.log('pt co 1 nghiem x =' + x);}
    }
    else{
        if(a!=0){
            delta = b*b - 4*a*c;
            if(delta == 0){
                x = -b/(2*a);
                console.log('pt co nghiem kep là:');
                console.log('x = ' + x);
            }
            else
            {
                x1 =  (-b + Math.sqrt(delta))/(2*a);
                x2 =  (-b - Math.sqrt(delta))/(2*a);
                console.log('Phương trình có hai nghiệm phân biệt là:');
                console.log('x1 = ' + x1);
                console.log('x2 = ' + x2);
            }
        }
    }
}
ptbac2(2,6,1)
ptbac2(0,0,3)
ptbac2(0,2,4)

// bt4 
function tinhnamnhuan(year){
if( year % 400 == 0 ){
    console.log('la nam nhuan')
}
else if(year % 4 == 0 && year % 100 != 0){
    console.log('ko phai nam nhuan')
}
else{
    console.log('ko phai nam nhuan')
}
}
tinhnamnhuan(2000)
tinhnamnhuan(1999)


// bt 5
function tinhbmi(kg,cao){
return kg / Math.pow(cao,2) }

console.log('chi so BMI la' + ' ' +tinhbmi(68, 1.65))
console.log('chi so BMI la' + ' ' +tinhbmi(56, 1.73))
// bt6
function tinhdof(doC){
    return doC * 1.8 + 32
}
console.log('do F = ' + tinhdof(32))
