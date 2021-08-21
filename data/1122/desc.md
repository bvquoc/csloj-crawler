<!--
**<center>NGUỒN: Ôn HN tháng 11/2017, Đỗ Đức Đông, Ngày 1</center>**
-->

Trong ngày sinh nhật của bé Bông, mẹ em đã mua tặng em một chiếc bánh hình chữ nhật ~M \times N~ mảnh bánh con. Bông đã đưa ra một cách cắt bánh như sau: mỗi người sẽ chọn một mảnh bánh hình chữ nhật của mình (có các cạnh song song với chiếc bánh băn đầu, chứa nguyên các mảnh bánh con), sau đó sẽ cắt mảnh bánh đó nhưng chưa lấy bánh ra. Sau khi tất cả mọi người đã cắt bánh xong, Bông muốn biết là mảnh bánh ban đầu đã được cắt thành bao nhiêu phần.

**Ví dụ**: Chiếc bánh có kích thước ~3×5~, có ba người sẽ cắt bánh và kết quả là sẽ nhận được ~6~ phần bánh.
<center><img src="/images/problems/1122/cake.png" width=300px></center>

**Yêu cầu**: Cho kích thức bánh ban đầu, và các mảnh bánh sẽ được cắt. Bạn hãy lập trình giúp bé Bông đếm xem sẽ nhận được bao nhiêu phần bánh.

## Dữ liệu vào:
- Gồm nhiều test, mỗi test có dạng:
    - Dòng đầu gồm hai số nguyên dương ~𝑀, 𝑁~ 
    - Dòng tiếp theo là một số nguyên dương ~𝐾\ (𝐾 ≤ 50)~ là số người tham gia cắt bánh
    - ~𝐾~ dòng sau, mỗi dòng bốn số ~𝑥_1, 𝑦_1, 𝑥_2, 𝑦_2~ mô tả các mảnh bánh của từng người ~(0 ≤ 𝑥_1, 𝑥_2 ≤ 𝑁; 0 ≤ 𝑦_1, 𝑦_2 ≤ 𝑀)~ 
(kết thúc file khi ~𝑀, 𝑁~ bằng ~0~) 

## Dữ liệu ra:
- Gồm nhiều dòng, mỗi dòng một số là số phần bánh 
nhận được tương ứng với dữ liệu vào.

## Ví dụ:
#### Dữ liệu vào:
```
3 5
3
1 1 3 2
4 0 2 3
4 0 5 1
6 6
2
2 0 5 3
3 1 4 2
0 0
```

## Dữ liệu ra:
```
6
3
```

## Giới hạn:
- **Subtask** ~\#1~: ~𝑀, 𝑁 ≤ 100~ 
- **Subtask** ~\#2~: ~𝑀, 𝑁 ≤ 10^6~ 