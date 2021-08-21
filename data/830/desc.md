**<center>Nguồn: Đề thi học sinh giỏi quốc gia năm 2017</center>**

Năm ~1202~, Leonardo Fibonacci, nhà toán học người Ý, tình cờ phát hiện ra tỉ lệ bàng ~0.618~ được tiệm cận bằng thương của hai số liên tiếp trong một loại dãy số vô hạn được một số nhà toán học ẤN ĐỘ xét đến từ năm ~1150~. Sau đó dãy số này được đặt tên là dãy số Fibonacci ~\{F_i: i=1, 2, ...\}~, trong đó ~F_1=F_2=1~ và mỗi số tiếp theo trong dãy được tính bằng tổng của hai số ngay trước nó. Đây là ~10~ số đầu tiên của dãy số Fibonacci: ~1, 1, 2, 3, 5, 8, 13, 21, 34, 35~. Người ta đã khám phá ra mối liên hệ chặt chẽ của số Fibonacci và tỉ lệ vàng với sự phát triển trong tự nhiên (cánh hoa, cành cây, vân gỗ), trong vũ trụ (hình xoáy trôn ốc dải ngân hà, khoảng cách giữa các hành tinh), hay sự cân đối của cơ thể con người. Đặc biệt số Fibonacci được ứng dụng mạnh mẽ trong kiến trúc (Kim tự tháp Ai Cập, tháp Eiffel), trong mỹ thuật (các bức tranh của Leonardo da Vinci), trong âm nhạc (các bản giao hưởng của Mozart) và trong nhiều lĩnh vực khoa học kĩ thuật.
Trong toán học, dãy Fibonacci là một đối tượng tổ hợp quan trọng có nhiều tính chất đẹp. có nhiều phương pháp hiệu quả liệt kê và tính các số Fibonacci như phương pháp lặp hay phương pháp nhân ma trận.

Sau khi được học về dãy số Fibonacci, Sơn rất muốn phát hiện thêm những tính chất của dãy số này. Vì thế Sơn đặt ra bài toán sau đây: Hỏi rằng có thể tìm được một tập con các số trong ~n~ số Fibonacci liên tiếp bắt đầu từ số thứ ~i~, sao cho tổng của chúng chia hết cho một số nguyên dương ~k\ (k\le n)~ cho trước hay không? Nhắc lại, một tập con ~q~ số của một dãy ~n~ số là một cách chọn ra ~q~ số bất kỳ trong n số của dãy đó, mỗi số được chọn không quá một lần.

**Yêu cầu:** Hãy giúp Sơn giải quyết bài toán đặt ra.

## Dữ liệu vào:
- Dòng thứ nhất ghi số nguyên dương ~T\ (T\le 10)~ là số lượng bộ dữ liệu;
- Mỗi dòng trong ~T~ dòng tiếp theo chứa ba số nguyên dương ~n, i~ và ~k~ là thông tin của một bộ dữ liệu.

Các số trên cùng dòng được ghi cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra ~T~ dòng tương ứng với kết quả của ~T~ bộ dữ liệu đầu vào, mỗi dòng có cấu trúc như sau:
	- Đầu tiên ghi số nguyên ~q~ là số lượng các số trong tập con tìm được, tiếp đến ghi ~q~ số nguyên là các số thứ tự trong dãy Fibonacci của q số trong tập con tìm được. Nếu không tìm được tập con thỏa mãn điều kiện đặt ra thì ghi ra một số ~0~. Nếu có nhiều cách chọn thì chỉ cần đưa ra một cách chọn bất kỳ.

## Ví dụ:
#### Dữ liệu vào:
```
1
10 3 9
```

#### Dữ liệu ra:
```
2 5 7
```

#### Giải thích:
- Trong ví dụ trên một tập con thỏa mãn điều kiện đặt ra là tập gồm hai số ~F_5=5, F_7=13~ với tổng bằng ~18~.

## Giới hạn:
- Có ~20\%~ số lượng test thỏa mãn điều kiện: ~n≤20, i≤10^6~;
- Có ~20\%~ số lượng test thỏa mãn điều kiện: ~n≤10^3 , i≤10^6~;
- Có ~20\%~ số lượng test thỏa mãn điều kiện: ~n≤10^6, i≤10^6~;
- Có ~10\%~ số lượng test thỏa mãn điều kiện: ~n≤20, i≤10^{15}~;
- Có ~10\%~ số lượng test thỏa mãn điều kiện: ~n≤10^3, i≤10^{15}~;
- Có ~20\%~ số lượng test còn lại thỏa mãn điều kiện: ~n≤10^6, i≤10^{15}~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)