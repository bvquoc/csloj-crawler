**<center>Nguồn: Ôn Thầy Hiếu Hưng Yên - T11/2019</center>**

Tại buổi tựu trường  đầu năm, một lớp gồm ~n~ học sinh xếp thành một hàng dọc quay mặt về phía trước để nghe thông báo. Các học  sinh đứng sau có thể nhìn thấy được  những  học  sinh đứng trước mình, ngược lại thì không. Người đứng đầu hàng đương nhiên không thể thấy được những người xếp hàng sau mình.

Các bạn học sinh thường so kè nhau về chiều cao nên hay đếm xem có bao nhiêu người cao hơn mình để tính thứ hạng chiều cao của mình trong lớp. Tuy nhiên, điều này hơi khó khăn vì mỗi người chỉ đếm được số người đứng  phía trước cao hơn mình. Bạn hãy giúp từng học sinh tính được mình cao thứ hạng mấy trong hàng. Biết rằng không có hai bạn học sinh nào có chiều cao bằng nhau.

**Yêu cầu:** Cho dãy ~a_i~ ứng với số người cao hơn mình mà học sinh đứng ở vị trí ~i\ (1≤i≤n)~ nhìn thấy được, hãy cho biết thứ hạng của các bạn đứng trong hàng (vị trí ~1~ là vị trí đầu hàng, vị trí ~n~ là vị trí cuối hàng).

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương n ~(n≤3\times 10^5)~;
- Dòng thứ hai chứa dãy số nguyên ~a_1,a_2,…,a_n~.

## Dữ liệu ra:
- Ghi ra dãy số nguyên ~x_1,x_2,…,x_n~ với ~x_i~ là thứ hạng chiều cao của người thứ ~i~ (thứ hạng đánh số ~1, 2, ..., n~ theo thứ tự từ thấp đến cao).

## Ví dụ
#### Dữ liệu vào:
```
7
0 1 0 3 0 2 3
```

#### Dữ liệu ra:
```
3 2 6 1 7 5 4
```

## Giới hạn:
- **Subtask** ~1\ (50\%): n≤5000~;
- **Subtask** ~2\ (50\%): n≤3×10^5~.