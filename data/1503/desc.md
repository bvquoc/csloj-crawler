Giáo sư `Y` có một mảnh vườn là một đa giác lồi ~n~ cạnh (~n~ là số chẵn vì theo phong thủy giáo sư thích số chẵn). Sau đó giáo sư đã mua thêm đất để mở rộng mảng vườn của mình. Cũng vì nhà *không thiếu gì ngoài điều kiện* và tính thích hoành tráng nên giáo sư đã mở rộng mảnh vườn theo cách không giống ai: Ông đã chọn từng cặp cạnh đối của đa giác (cặp cạnh được gọi là đối nhau nếu có ~\frac{n}{2} - 1~ cạnh ở giữa chúng) và mua toàn bộ phần đất là phần mặt phẳng nằm giữa hai đường thẳng này cùng với mảnh vườn ban đầu.

Sau khi mở rộng mảnh vườn, ông đã mua một máy trồng cây cũng rất khác người. Gọi ~T~ là phiên bản của máy (có ~2~ phiên bản tương ứng với ~T\in \{0, 1\}~), ~X~ là số cây hiện đang có trong vườn (ban đầu không có cây nào) và ~A, B\ (|A|, |B| \le 2.10^{18})~ là hai số nguyên (hai số này là tham số để điều khiển máy trồng cây) thì máy sẽ trồng thêm một cây mới ở tọa độ ~(A \oplus (T\times X^3), B \oplus (T\times X^3))~, ở đây ~\oplus~ là toán tử `XOR` bit.

Giáo sư đã cho máy trồng ~q~ cây nhưng lại không thể xác định được những cây nào nằm trong vườn của mình. Giáo sư lại phải nhờ các bạn giúp.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên ~T \in \{0, 1\}~ là phiên bản của máy mà giáo sư đã mua;
- Dòng thứ hai chứa số nguyên dương chẵn ~n~ là số đỉnh của đa giác lồi (mảnh vườn ban đầu của giáo sư);
- ~n~ dòng tiếp theo, dòng thứ ~i~ chứa hai số nguyên ~x_i, y_i \ (|x_i|, |y_i|\le 10^9)~ là tọa độ đỉnh thứ ~i~ của đa giác. Các đỉnh của đa giác được liệt kê ngược chiều kim đồng hồ và không có ba điểm nào thẳng hàng;
- Dòng tiếp theo chứa số nguyên dương ~q~ là số lần máy thực hiện trồng cây;
- ~q~ dòng tiếp theo, dòng thứ ~i~ chứa hai số nguyên ~A_i, B_i~ là tham số cho lần trồng cây thứ ~i~.

## Dữ liệu ra:
- Ghi ra ~q~ dòng, dòng thứ ~i~ là `YES` nếu cây trồng ở lần thứ ~i~ thuộc mảnh vườn của giáo sư, là `NO` nếu ngược lại.

## Giới hạn
- **Subtask** ~\#1~: ~30\%~ số điểm có ~n, q \le 2000, T=0~
- **Subtask** ~\#2~: ~40\%~ số điểm có ~n, q \le 10^5, T=0~
- **Subtask** ~\#3~: ~30\%~ số điểm có ~n, q \le 10^5, T=1~

## Ví dụ (Tải test đề bài và 2 test mẫu khác ở "Tệp đính kèm" phía trên đề bài):
#### Dữ liệu vào:
```
0
6
-1 -1
2 -1
3 3
2 4
1 4
-2 1
6
2 2
3 0
1 -6
2 6
-5 5
5 10
```

#### Dữ liệu ra:
```
YES
YES
NO
NO
NO
NO
```

#### Giải thích:
<center><img src="/images/problems/1503/treeagain.svg" width=400px></center>
<center>Hình minh họa cho test đề bài</center>

- Mảnh vườn ban đầu là phần xanh đậm
- Phần vườn mở rộng là phần xanh nhạt
- Phần không thuộc vờn nha giáo sư (sau khi đã mở rộng) là phần màu trắng
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)