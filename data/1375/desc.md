**<center>NGUỒN: Bài tập thầy Hiếu ôn Hải Phòng T11/2020</center>**

Tí và tèo là đôi bạn thân. Tuy nhiên, Tí rất thích vẽ, Tí vừa chia tờ giấy trắng thành ~𝑚 × 𝑛~ ô vuông. Tí thực hiện vẽ tô ~𝑞~ vệt mực từ ô ~(𝑥_1, 𝑦_1)~ tới ô ~(𝑥_2, 𝑦_2), (𝑥_1 = 𝑥_2\text{ hoặc }𝑦_1 = 𝑦_2)~.

Mỗi vệt có kích thước ngang đúng bằng kích thước ô vuông, và sẽ làm đen các ô ~(𝑥, 𝑦)~ thỏa mãn ~(𝑥_1 ≤ 𝑥 ≤ 𝑥_2, 𝑦_1 ≤ 𝑦 ≤ 𝑦_2)~. Tèo không hiểu gì về nghệ thuật, nhưng Tèo lại hứng thú với các vùng mới được tạo ra. Tèo nhìn theo các dòng vẽ của Tí rồi đặc biệt quan tâm đếm xem có bao nhiêu vùng liên thông toàn màu trắng.

**Yêu cầu:** Hãy lập trình xác định giúp Tèo số thành phần liên thông toàn màu trắng sau mỗi lần Tí vẽ một nét vẽ.

## Dữ liệu vào:
- Dòng đầu tiên chứa ~3~ số nguyên dương ~𝑚, 𝑛, 𝑞~;
- ~𝑞~ dòng tiếp theo, mỗi dòng chứa ~4~ số ~𝑥_1, 𝑦_1, 𝑥_2, 𝑦_2~.

## Dữ liệu ra:
- Ghi ra ~𝑞~ dòng, mỗi dòng một số nguyên là số lượng vùng liên thông tìm được.

## Ví dụ:
#### Dữ liệu vào:
```
4 6 5
2 2 2 6
1 3 4 3
2 5 3 5
4 6 4 6
1 6 4 6
```

#### Dữ liệu ra:
```
1
3
3
4
3
```

#### Giải thích:
<center><img src="/images/problems/1375/DRAWRECT.png" width="600px" /></center>

## Giới hạn:
- ~50\%~ số điểm có ~𝑛, 𝑚, 𝑞 ≤ 100~;
- ~50\%~ số điểm còn lại có ~𝑛, 𝑚 ≤ 1000; 𝑞 ≤ 10^4~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)