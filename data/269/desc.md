Đội tuyển dự thi Olympiad có ~n~ học sinh được đánh số từ ~1~ đến ~n~. Học sinh thứ ~i~ được đặc trưng bởi hai tham số: hệ số kỹ năng ~a_i~ và chỉ số thông minh ~b_i~.

Giờ học được tiến hành theo kiểu sau: Giáo viên phụ trách đội tuyển lần lượt làm việc với học sinh, thảo luận, giải quyết những vấn đề nẩy sinh. Kết quả là hệ số kỹ năng của học sinh được tăng thêm một lượng bằng chỉ số thông minh. Như vậy học sinh càng thông minh bao nhiêu thì hệ số kỹ năng càng tăng nhiều bấy nhiêu.

Do hạn chế về thời gian, trong suốt quá trình học, giáo viên chỉ có thể thực hiện được ~c~ lần làm việc riêng với học sinh. Một học sinh có thể được làm việc nhiều lần với giáo viên.

Số liệu thống kê cho thấy, muốn được giải trong kỳ thi thì hệ số kỹ năng phải không nhỏ hơn ~k~.

**Yêu cầu:** Cho các số nguyên ~n,c,k~ và ~a_i,b_i\ (1≤n≤10^6,1≤c,k≤10^9,0≤a_i,b_i≤10^9,i=1÷n)~. Hãy xác định số lượng tối đa học sinh sẽ được giải.

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên dương ~n,c,k~;
- ~n~ dòng sau, dòng thứ ~i~ chứa hai số nguyên ~a_i,b_i~.

## Dữ liệu ra:
- Một số nguyên duy nhất là số học sinh đạt giải.

## Ví dụ:
#### Dữ liệu vào:
```
3 5 6
1 1
2 1
4 2
```

#### Dữ liệu ra:
```
2
```

**Giải thích:** Làm việc với học sinh số ~2~ bốn lần và làm việc với học sinh số ~3~ một lần.

## Giới hạn:
- Subtask ~\#1: 40\%~ số điểm có ~m, n ≤ 20~;
- Subtask ~\#2: 30\%~ số điểm khác có ~m, n≤50~;
- Subtask ~\#3: 30\%~ số điểm còn lại có ~m, n ≤ 500~;
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)