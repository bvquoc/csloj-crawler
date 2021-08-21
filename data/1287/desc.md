**<center>Hải phòng - Ngày 06 tháng 11 năm 2020 (am)</center>**

Mai được vào đội tuyển tin học của nhà trường. Trong thời gian tập huấn ~𝑀~ ngày ~(2 ≤ 𝑀 ≤10^9)~, Mai đã thực hiện ~𝑁\ (1 ≤ 𝑁 ≤ 10^5)~ bài kiểm tra khác nhau. Tuy vậy, khi nhớ lại, cô không nhớ được chính xác các lần kiểm tra diễn ra vào ngày nào.

Với lần kiểm tra thứ ~𝑖~, Mai chỉ nhớ được nó diễn ra không sớm hơn ngày ~𝑆_𝑖\ (1 ≤ 𝑆_i ≤ 𝑀)~. Ngoài ra Mai còn nhớ được ~𝐶\ (1 ≤ 𝐶 ≤ 10^5)~ ký ức, mỗi ký ức được mô tả bởi bộ ba ~(𝑎, 𝑏, 𝑥)~ với ý nghĩa rằng kỳ thi ~𝑏~ xảy ra sau kỳ thi ~𝑎~ ít nhất ~𝑥~ ngày.

Hãy giúp Mai xác định ngày sớm nhất có thể của mỗi lần thi. Dữ liệu đảm bảo rằng việc nhớ của Mai là chính xác (luôn tồn tại một phương án thỏa mãn).

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên dương ~𝑁, 𝑀~ và ~𝐶~;
- Dòng thứ hai chứa ~𝑁~ số nguyên ~𝑆_1, 𝑆_2, … , 𝑆_𝑁~;
- ~𝐶~ dòng tiếp theo, mỗi dòng chứa ba số nguyên ~𝑎, 𝑏~ và ~𝑥~ mô tả rằng kỳ thi ~𝑏~ diễn ra sau kỳ thi ~𝑎~ ít nhất ~𝑥~ ngày. Trên tất cả các dòng ~𝑎 ≠ 𝑏, 1 ≤ 𝑎, 𝑏 ≤ 𝑁 , 1 ≤ 𝑥 ≤ 𝑀~.

## Dữ liệu ra:
- In ra ~𝑁~ dòng, dòng thứ ~𝑖~ chứa một số nguyên là ngày sớm nhất có thể của lần thi ~𝑖~;

## Ví dụ:
#### Dữ liệu vào:
```
4 10 3
1 2 3 4
1 2 5
2 4 2
3 4 4
```

#### Dữ liệu ra:
```
1
6
3
8
```

## Giới hạn:
- Subtask ~\#1: 𝑁, 𝐶 ≤ 10^3\ [30\%]~;
- Subtask ~\#2:~ Không có ràng buộc bổ sung ~[70\%]~.