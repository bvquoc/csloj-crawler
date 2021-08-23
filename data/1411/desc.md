**<center>ĐỀ KIỂM TRA ĐỘI TUYỂN HSG LẦN 3 - Ôn Hải Phòng T11/2020</center>**

Rar the Cat cuối cùng đã thực hiện được ước mơ từ nhỏ là trở thành phi công và muốn đưa bạn mình, Dinosaur, trên một vài chuyến bay ngắm cảnh. Trong những chuyến bay của 
mình Rar phải bay qua các ngọn núi trong $N$ ngọn núi (đánh số thứ tự từ $1$ đến $N$), trong đó ngọn núi thứ $i$ có chiều cao là $H_i$ mét.

Ví dụ, hình ảnh dưới đây thể hiện có $N = 6$ ngọn núi, chiều cao là $H = \{1,3,2,4,1,2\}$: 
<center><img src="/images/problems/1411/PILOT.png" width="300px" /></center>

Rar sẽ thực hiện $Q$ chuyến bay, với chuyến bay thứ $i$ có độ cao hành trình tối đa là $Y_i$ mét. Mỗi chuyến bay bắt đầu từ núi thứ $s$ và kết thúc trên núi thứ $e$ (trong đó $s ≤ e$) từ trái sang phải. Vì mỗi chuyễn bay của anh ta có độ cao bay tối đa, nên anh ta không thể bay ngang, cất cánh hoặc hạ cánh trên một ngọn núi có độ cao lớn hơn độ cao bay của máy bay mà anh ta điều khiển.

Đối với chuyến bay thứ $i$, hãy giúp Rar xác định tổng số chuyến bay khác nhau mà anh ta có thể thực hiện, tức là tổng số cách Rar có thể chọn $s$ và $e$ sao cho không có dãy núi nào từ $s$ và $e$ có chiều cao lớn hơn $Y_i$.

## Dữ liệu vào:
- Dòng đầu tiên sẽ chứa hai số nguyên $N$ và $Q$;
- Dòng thứ hai sẽ chứa $N$ số nguyên $H_1, …, H_N$; 
- Dòng thứ ba sẽ chứa $Q$ số nguyên $Y_1, …, Y_Q$.

## Dữ liệu ra:
- Ghi ra $Q$ số nguyên trên $Q$ dòng, với số trên dòng thứ $i$ cho biết tổng số chuyến bay khác nhau mà Rar có thể thực hiện với chuyến bay thứ $i$ của mình.



## Ví dụ:
### Dữ liệu vào:
```
6 3
1 3 2 4 1 2
2 3 4
```

### Dữ liệu ra:
```
5
9
21
```

## Giới hạn:
- $1 ≤ N, Q, H_i, Y_i ≤ 10^6$;
- Subtask $\#1: 40\%$ số điểm có $1 ≤ N, Q ≤ 10^3$; 
- Subtask $\#2: 15\%$ số điểm tiếp theo có $1 ≤ N ≤ 10^5, Q = 1$;
- Subtask $\#3: 23\%$ số điểm tiếp theo có $1 ≤ N, Q ≤ 10^5$ và dãy $H$ tăng nghiêm ngặt;
- Subtask $\#4: 11\%$ số điểm tiếp theo có $1 ≤ N, Q ≤ 10^5$;
- Subtask $\#5: 11\%$ số điểm cuối cùng không có ràng buộc gì thêm.