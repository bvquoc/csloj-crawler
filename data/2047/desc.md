**<center>Nguồn:  Free Contest 06</center>**

An đang bị phạt và cô giáo đang để một chiếc đồng hồ đếm giây ở cạnh An để tính thời gian phạt. Hiện giờ đồng hồ đang đếm ~x~ giây. Sau một giây nữa, số chỉ sẽ tăng lên ~x + 1~. Tuy nhiên, An biết loại đồng hồ đếm giây này có một lỗ hổng cho phép An làm số chỉ thay đổi ngay lập tức từ ~x~ thành ~x′~ ở đó ~x′~ là số bé nhất không nhỏ hơn ~x~ mà chia hết cho ~y~. Thời gian thực hiện thao tác làm thay đổi chỉ số này coi như bằng ~0~. An sẽ lợi dụng lỗ hổng này để thời gian trôi qua nhanh hơn. Để tránh bị cô giáo phát hiện, An sẽ hack vào lỗ hổng không quá ~k~ lần. Vậy sau ~t~ giây nữa, số chỉ lớn nhất của đồng hồ là bao nhiêu?

Ví dụ, ~x = 9, y = 10, k = 10~ và ~t = 2~. An có thể ngay lập tức hack để tăng số chỉ lên ~10~. Sau ~1~ giây, đồng hồ chỉ ~11~ giây, An hack ngay lập tức để đồng hồ chỉ ~20~ giây. Sau ~1~ giây nữa, đồng hồ chỉ ~21~ giây, An hack lần thứ ba để đồng hồ chỉ ~30~ giây. Vậy sau ~t = 2~ giây, đồng hồ chỉ ~30~ giây. Đây là số chỉ lớn nhất có thể đạt được.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên ~T\ (1 ≤T ≤10000)~ là số lượng test. Sau đó là ~T~ test;
- Mỗi test gồm một dòng duy nhất chứa bốn số nguyên ~x, y, k~ và ~t\ (1 ≤x, y, k, t ≤10^9)~.

## Dữ liệu ra:
- Với mỗi test ghi ra một số nguyên duy nhất là số chỉ lớn nhất trên đồng hồ sau ~t~ giây trên một dòng.

## Ví dụ:
#### Dữ liệu vào:
```
2
2 6 1 3
9 10 10 2
```

#### Dữ liệu ra:
```
9
30
```