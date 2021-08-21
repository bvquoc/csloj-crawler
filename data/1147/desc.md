**<center>NGUỒN: Contest tháng 12/2017 Day 2 (Hiếu Hưng Yên - Second Round of Hải phòng)</center>**
<br>

Phong Dương vừa được thăng chức làm giám đốc Ngân hàng Nhà nước. Ngân 
hàng có ~𝑁~ máy in tiền xếp thành hàng ngang, đánh số từ ~1~ tới ~𝑁~ theo thứ tự từ trái sang phải. 

Máy in tiền thứ ~𝑖~ có thể in được ~𝑀_i~ đồng một ngày. Nhưng không may, các máy in tiền được xếp quá gần nhau nên nếu máy ~𝑖~ được sử dụng trong một ngày nào đó thì hai máy kề với máy ~𝑖~ là hai máy ~𝑖 + 1~ và ~𝑖 − 1~ (hai máy đầu và cuối chỉ có một máy kề) sẽ không sử dụng được trong cùng ngày.

Biết rằng, bắt đầu mỗi ngày, Phong Dương bảo trì một máy in ~𝑖~ bất kì, do đó số tiền in được ~M_i~ của máy bị thay đổi. Cho trước danh sách những thay đổi, hãy giúp Phong Dương tính số tiền nhiều nhất in được sau ~D~ ngày. 

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số ~𝑁~ và ~𝐷\ (1 ≤ 𝑁 ≤ 40000; 1 ≤ 𝐷 ≤ 50000)~; 
- ~𝑁~ dòng tiếp theo, dòng thứ ~𝑖~ là ~M_i\ (1 ≤ 𝑀_i ≤ 10^5)~; 
- ~𝐷~ dòng tiếp theo, dòng thứ ~𝑗~ gồm hai số ~𝑖~ và ~𝑚~, tương ứng vào ngày ~𝑗~ thì thay đổi giá trị ~𝑀_i = 𝑚~. 
Các số trên một dòng được ghi cách nhau bởi dấu cách. 

## Dữ liệu ra:
- Ghi ra một dòng duy nhất là số tiền thu được nhiều nhất sau ~D~ ngày.

## Ví dụ:
#### Dữ liệu vào:
```
5 3
1
2
3
4
5
5 2
2 7
1 10
```

#### Dữ liệu ra:
```
32
```

#### Giải thích:
- Vào ngày ~1~, theo thứ tự, số tiền in được ở các máy: ~1, 2, 3, 4, 𝟐~, vậy số tiền thu được nhiều nhất: ~2+4 = 6~ (hoặc ~1+3+2~). 
- Ngày ~2~, theo thứ tự, số tiền in được ở các máy: ~1, 𝟕, 3, 4, 2~, vậy số tiền thu được nhiều nhất: ~7+4 = 11~.  
- Ngày ~3~, theo thứ tự, số tiền in được ở các  máy: ~𝟏𝟎, 7, 3, 4, 2~, vậy số tiền thu được nhiều nhất: ~10+3+2=15~.  
- Vậy tổng số tiền sau ~3~ ngày: ~6+11+15 = 32~. 

## Giới hạn:
- ~30\%~ số điểm có ~𝑁, 𝐷 ≤ 500~.