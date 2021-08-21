**<center>Nguồn: Beginner Free Contest 7</center>**

Kì thi THPTQG đang tới gần, trường THPT Free Contest đang đau đầu với việc sắp xếp chỗ ngồi cho các bạn thí sinh phù hợp sao cho các bạn không thể gian lận được và kì thi diễn ra thật công bằng. Với việc vô địch Free Contest ~100~, Cá Nóc Cắn Cáp được mời về trường với mục tiêu tìm ra giải pháp sắp xếp chỗ ngồi phù hợp cho học sinh trong trường. Vừa nghe yêu cầu, Cá Nóc liền nghĩ ra một cách xếp thú vị:
- Với sân trường có kích thước là ~R ×C~, mỗi học sinh được xếp lên duy nhất một ô trong số ~R ×C~ ô trên sân, và mỗi ô chỉ có nhiều nhất một học sinh được ngồi ở đó. Ô ở hàng ~i~, cột ~j~ được gọi là ô ~(i, j)~.
- Mỗi học sinh sẽ được ngồi quay mặt về một trong ~4~ hướng: Đông, Tây, Nam, Bắc.
- Để việc gian lận trao đổi bài với nhau là không xảy ra, nếu có hai học sinh ngồi cùng hàng, tức là nếu có hai học sinh ngồi ở vị trí ~(i, j_1)~ và ~(i, j_2)\ (1 ≤ i ≤ R, 1 ≤ j_1 < j_2 ≤ C)~ thì học sinh ngồi ở vị trí ~(i, j_1)~ phải quay mặt về hướng Tây và bạn còn lại phải quay mặt về hướng Đông.
- Tương tự, nếu có hai học sinh ngồi cùng một cột, thì học sinh ngồi ở hàng nhỏ hơn phải quay mặt về hướng Bắc và bạn còn lại phải quay mặt về hướng Nam.

Dù là cách sắp xếp không phải là tối ưu nhất, nhưng dù sao nó cũng là một cách xếp độc đáo và mang tính công bằng cao. Cá Nóc liền tự hỏi không biết có bao nhiêu cách để xếp ít nhất một học sinh lên sân trường với cách sắp xếp thú vị trên. Vì đang mong chờ Free Contest ~100~ Cup về nhà, Cá Nóc đang không muốn tính toán chút nào và muốn nhờ các bạn giúp đỡ.

## Dữ liệu vào:
- Dòng duy nhất chứa các số nguyên ~R, C~ là số dòng và số cột của sân trường.

## Dữ liệu ra:
- Ghi ra phần dư của số lượng cách xếp theo Cá Nóc khi chia cho ~10^9 + 7~.

## Ví dụ:
#### Dữ liệu vào:
```
2 1
```

## Dữ liệu ra:
```
9
```

#### Dữ liệu vào:
```
3 4
```

## Dữ liệu ra:
```
3252
```

#### Dữ liệu vào:
```
100 100
```

## Dữ liệu ra:
```
561068619
```

#### Giải thích:
<center><img src="/images/problems/634/GRADUATION.png" width=600px></center>

## Giới hạn:
- ~50\%~ số điểm có ~R, C ≤ 300~;
- ~50\%~ số điểm có ~R, C ≤ 3000~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)