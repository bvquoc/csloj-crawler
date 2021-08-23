**<center>(Đề đề xuất DHBB 2017 của THPT CHUYÊN BIÊN HÒA – HÀ NAM)</center>**

Những con bò của nông dân John đứng xếp thành một hàng để biểu tình. Các con bò được đánh số từ $1$ đến $N$ theo thứ tự và con bò thứ $i$ giơ một tấm bảng ghi một số nguyên $a_i$ thể hiện mức độ ủng hộ với John (số càng lớn thì mức độ ủng hộ càng cao, số âm thể hiện sự phản đối của con bò đối với các chính sách của John). Mức độ ủng hộ của một nhóm các con bò liên tiếp được đo bằng tổng mức độ ủng hộ của từng con bò trong nhóm.

Để ngăn chặn sự chống đối, John muốn chia các con bò đang đứng thành từng nhóm gồm các con bò liên tiếp sao cho mức độ ủng hộ trong mỗi nhóm đều là số không âm.

Hãy tính xem có bao nhiêu cách khác nhau để John có thể làm như vậy.

Ví dụ, với $N = 4$ và các con bò có mức độ ủng hộ lần lượt là $2, 3, -3$ và $1$ thì khi đó John có thể có $4$ cách chia như sau:
- Cách $1: (2, 3, -3, 1)$;
- Cách $2: (2, 3, -3), (1)$;
- Cách $3: (2), (3, -3, 1)$;
- Cách $4: (2), (3, -3), (1)$.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương $n$;
- Dòng tiếp theo ghi $n$ số nguyên $a_1, …, a_n$, hai số liên tiếp được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Một số nguyên duy nhất là kết quả thu được sau khi chia lấy dư cho `1000000009`.

## Ví dụ:
### Dữ liệu vào:
```
4
2 3 -3 1
```

### Dữ liệu ra:
```
4
```

## Giới hạn:
- $1 ≤ n ≤ 1000; | a_i| ≤ 10000$.