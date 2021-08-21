**<center>ĐỀ KIỂM TRA ĐỘI TUYỂN HSG LẦN 2 Day 2- Hải Phòng 2020</center>**

Vừa bước chân vào trường THCS, Bé Bi đã đăng ký học đội tuyển học sinh giỏi tin học của nhà trường, và được tiếp xúc với một bài toán cơ bản là bài toán tìm xâu con chung dài nhất. Bài toán được phát biểu như sau:

Xâu ký tự $T$ gọi là xâu con của xâu ký tự $S$ nếu có thể xóa bớt một số ký tự trong xâu $S$ để được xâu $T$ (giữ nguyên thứ tự xuất hiện trong xâu $S$). Xâu ký tự $C$ được gọi là xâu con chung dài nhất của xâu ký tự $A$ và $B$ nếu thỏa mãn:
- $C$ là xâu con của xâu $A$;
- $C$ là xâu con của xâu $B$;
- $C$ có độ dài lớn nhất.

Sau khi làm xong bài toán trên, Bé Bi mới đặt một câu hỏi để mở rộng bài toán trên, đó là có bao nhiêu xâu khác nhau là xâu con chung dài nhất của xâu ký tự $A$ và $B$? Biết rằng xâu $X$ được gọi là khác xâu $Y$ nếu tồn tại vị trị $i$ sao cho $X[i]≠Y[i]$.

## Dữ liệu vào:
- Dòng đầu chứa xâu ký tự $A$;
- Dòng thứ hai chứa xâu ký tự $B$. Các xâu ký tự có độ dài không quá $500$ ký tự và chỉ chứa chữ cái tiếng anh in thường.

## Dữ liệu ra:
- Đưa ra hai số nguyên tương ứng là  độ dài xâu con chung dài nhất và số lượng xâu con chung dài nhất khác nhau theo modul $666013$?

## Ví dụ:
#### Dữ liệu vào:
```
banana
oana
```

#### Dữ liệu ra:
```
3 1
```

#### Dữ liệu vào:
```
abcabcaa
acbacba
```

#### Dữ liệu ra:
```
5 7
```

**Chú ý:** Bài này chấm theo từng ý, trình chấm sẽ **đọc hai số nguyên tương ứng với hai ý**, mỗi ý đúng được $50\% số điểm một test. (Bạn chỉ trả lời một ý cũng phải ghi ra hai số nguyên).