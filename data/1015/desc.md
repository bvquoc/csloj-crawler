**<center>NGUỒN: CONTEST PRACTICE VNOI20 (WEEK 4 - T11/2019)</center>**
<br>

Trong đợt trại hè Tin học miền trung diễn ra tại thành phố ĐNN, ban tổ chức đã tổ chức cho các đoàn trò chơi hái hoa như sau: Có ~k\ (1≤k≤10)~ loại hoa (các loại hoa được đánh chỉ số từ ~1~ đến ~k~) được ban tổ chức sắp xếp tại ~n\ (1< n≤1000)~ vị trí (các vị trí được đánh chỉ số từ ~1~ đến ~n~). Có ~m\ (1≤m≤30000)~ đoạn đường hai chiều nối giữa các vị trí với nhau đảm bảo luôn có đường đi giữa hai vị trí bất kì, thời gian đi lại trên đoạn đường nối giữa hai vị trí ~x~ và ~y\ (1≤x,y≤n)~ là ~t\ (1≤t≤10000)~. Nhiệm vụ của mỗi đội là xuất phát từ vị trí ~1~ di chuyển đến đích là vị trí ~n~ sao cho hái được đủ ~k~ loại hoa và thời gian về đích là ít nhất. Vì mỗi đội có ~2~ người chơi nên hoa của mỗi đội là số hoa của cả ~2~ người gộp lại và thời gian về đích là thời gian lớn nhất của ~2~ người trong đội. Mỗi người trong đội có thể chọn một hành trình bất kì, có thể đi các đoạn đường giống nhau và mỗi vị trí có thể đến nhiều lần.

**Yêu cầu**: Xác định thời gian ít nhất của đội giành chiến thắng.

## Dữ liệu vào:
+ Dòng đầu ghi ba số nguyên ~n,m,k~
+ Trong ~n~ dòng tiếp theo, dòng thứ ~i~ ghi thông tin về các loại hoa được bố trí tại ví trí thứ ~i\ (1≤i≤n)~, số đầu tiên ghi số nguyên ~c\ (0≤c≤k)~ là số lượng các loại hoa, ~c~ số tiếp theo là chỉ số các loại hoa ở vị trí đó.
+ Trong ~m~ dòng cuối, mỗi dòng ghi thông tin về một đoạn đường gồm ~3~ số lần lượt là ~x,y,t~
Các số trên một dòng được ghi cách nhau ít nhất một dấu cách.

## Dữ liệu ra:
- Ghi ra một số duy nhất là thời gian ít nhất tìm được.

## Ví dụ: 
#### Dữ liệu vào:
```
5 5 5
1 1
1 2
1 3
1 4
1 5
1 2 10
1 3 10
2 4 10
3 5 10
4 5 10
```

#### Dữ liệu ra:
```
30
```
## Giới hạn:
+ Có ~20\%~ số test tương ứng ~20\%~ số điểm có ~k=1~
+ Có ~30\%~ số test khác tương ứng ~30\%~ số điểm có ~k=2~
+ Có ~50\%~ số test còn lại tương ứng ~50\%~ số điểm có ~3≤k≤10~
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)