**<center>Nguồn: Beginner Free Contest 11</center>**

Cho dãy số ~x_1, x_2, . . . , x_n~. Hãy đếm số lượng dãy con (có ít nhất một phần tử, có thể không liên tiếp) có trung bình cộng (tổng giá trị các phần tử chia cho số lượng phần tử) đúng bằng ~a~.

Vì đáp án có thể rất lớn nên bạn được yêu cầu đưa ra phần dư của số lượng dãy con sao khi chia cho ~10^9 + 7~.

## Dữ liệu vào:
- Dòng đầu tiên ghi số nguyên dương ~T~ – số bộ dữ liệu vào. Mỗi bộ dữ liệu vào có định dạng như sau:
    - Dòng thứ nhất ghi hai số nguyên ~n, a\ (1 ≤ n, a ≤ 200)~ – số phần tử của dãy số và giá trị ~a~ trên đề bài.
    - Dòng thứ hai ghi ~n~ số nguyên dương ~x_1, x_2, . . . , x_n\ (x_i ≤ 200)~ mô tả dãy số.

## Dữ liệu ra:
- Với mỗi bộ dữ liệu, in ra trên một dòng kết quả tương ứng (chia cho ~10^9 + 7~ lấy phần dư).

## Ví dụ:
#### Dữ liệu vào:
```
3
4 6
5 7 6 7
5 100
4 2 5 10 5
6 100
77 97 114 105 115 97
```

#### Dữ liệu ra:
```
5
0
1
```

#### Giải thích
- Ở ví dụ thứ nhất, các dãy con cần đếm là
    - ~[x_3] = [6]~
    - ~[x_1, x_2] = [5, 7]~
    - ~[x_1, x_4] = [5, 7]~
    - ~[x_1, x_2, x_3] = [5, 7, 6]~
    - ~[x_1, x_3, x_4] = [5, 6, 7]~.
- Ở ví dụ thứ hai, các dãy con đều có trung bình cộng nhỏ hơn ~100~.
- Ở ví dụ thứ ba, dãy con duy nhất cần đếm là: ~[x1, x2, x3, x5, x6] = [77, 97, 114, 115, 97]~.

## Giới hạn:
- **Subtask** ~\#1\ (20\%\text{ số test}): n ≤ 16; a, x_i ≤ 50~;
- **Subtask** ~\#2\ (40\%\text{ số test}): n ≤ 50; a, x_i ≤ 50~;
- **Subtask** ~\#3\ (40\%\text{ số test}):~ Không có ràng buộc gì thêm.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)