**<center>Nguồn: Ôn HN tháng 11/2017, Thầy Lê Minh Hoàng, Ngày 2</center>**

Công ty X nhận làm ~𝑛~ dự án đánh số từ ~1~ tới ~𝑛~ để cải tạo các công trình công cộng và các địa điểm tham quan du lịch của thành phố. Dự án thứ ~𝑖~ cần công ty X đầu tư một khoản tiền là ~𝑎_𝑖~ để mua vật liệu và sau khi hoàn thành dự án thứ ~𝑖~, công ty X sẽ được thành phố trả cho khoản tiền công là ~𝑏_𝑖~. Sau khi đã hoàn thành cả ~𝑛~ dự án, thành phố sẽ chi trả hết những khoản tiền mà công ty đã đầu tư để mua vật liệu và công ty sẽ thu được lợi nhuận đáng kể từ số tiền công đã được nhận qua từng dự án. Vấn đề duy nhất đặt ra là công ty phải huy động một số vốn ban đầu để chi trả những khoản đầu tư khi mà thành phố chưa nghiệm thu toàn bộ các dự án.

Biết rằng công ty X có thể thực hiện các dự án theo thứ tự tùy ý, hãy cho biết số vốn ban đầu ít nhất cần huy động và thứ tự thực hiện các dự án với số vốn đó.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~𝑛 ≤ 10^5~;
- Dòng thứ hai chứa ~𝑛~ số nguyên dương ~𝑎_1, 𝑎_2, … , 𝑎_𝑛\ (∀𝑖: 𝑎_𝑖 ≤ 10^9)~;
- Dòng thứ ba chứa ~𝑛~ số nguyên dương ~𝑏_1, 𝑏_2, … , 𝑏_𝑛\ (∀𝑖: 𝑏_𝑖 ≤ 10^9)~.

## Dữ liệu ra:
- Dòng đầu ghi một số nguyên là số vốn ban đầu ít nhất cần huy động;
- Dòng thứ hai ghi ~𝑛~ số nguyên theo thứ tự là số hiệu các dự án từ dự án được thực hiện đầu tiên tới dự án được thực hiện cuối cùng.

Các số trên một dòng được ghi cách nhau ít nhất một dấu cách.

## Ví dụ 
#### Dữ liệu vào:
```
6
6 3 1 2 4 9
2 4 3 1 3 2
```

#### Dữ liệu ra:
```
11
3 2 5 1 6 4
```

#### Giải thích:
- Vốn ban đầu là ~11~;
- Làm dự án ~3:~ chi ~1~ (vốn ~= 10~), thu ~3~ (vốn ~= 13~;
- Làm dự án ~2:~ chi ~3~ (vốn ~= 10~), thu ~4~ (vốn ~= 14~);
- Làm dự án ~5:~ chi ~4~ (vốn ~= 10~), thu ~3~ (vốn ~= 13~);
- Làm dự án ~1:~ chi ~6~ (vốn ~= 7~), thu ~2~ (vốn ~= 9~);
- Làm dự án ~6:~ chi ~9~ (vốn ~= 0~), thu ~2~ (vốn ~= 2~);
- Làm dự án ~4:~ chi ~2~ (vốn ~= 0~), thu ~1~ (vốn ~= 1~).