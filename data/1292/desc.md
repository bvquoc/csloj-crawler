**<center>Hải Phòng - Ngày 06 tháng 11 năm 2020 (pm)</center>**

BT trở thành CEO của một tập đoàn lớn. Tập đoàn có $𝑛$ người đánh số $1, 2, …, 𝑛$ và BT được đánh số là $1$. Tập đoàn được cấu trúc sao cho tất cả mọi người (ngoại trừ BT) đều có duy nhất một cấp trên trực tiếp (sếp), khi đó anh ta là trợ lý của cấp trên này. Mỗi người có thể có nhiều trợ lý nhưng vẫn phải báo cáo cho sếp của mình. Điều này đúng cho mọi người ngoại trừ BT - người duy nhất trong tập đoàn không có sếp.

Khi BT nhận một dự án từ các nhà đầu tư, anh ta sẽ giao nhiệm vụ cho một trợ lý của mình. Sau dó trợ lý này lại giao nhiệm vụ cho một trợ lý của họ... quá trình này lặp lại cho đến khi nhiệm vụ được giao cho một người  không có trợ lý. Người này bắt buộc phải thực hiện nhiệm vụ.

Đây là lúc vấn đề thực sự bắt đầu. Người hoàn thành nhiệm vụ được trả $1$ USD, sếp của anh ta nhận được $2$ USD, sếp tiếp theo nhận được $3$ USD,... cho đến BT - người nhận được nhiều tiền nhất từ nhiệm vụ này. Sau khi hoàn thành nhiệm vụ, nhân viên thực hiện nhận ra rằng việc chia tiền như vậy quá bất công và anh ta quyết định bỏ không làm cho tập đoàn nữa.

Như vậy đến các nhiệm vụ tiếp theo, tập đoàn sẽ còn ít người hơn. Tuy nhiên do quan liêu nên qui trình giao nhiệm vụ, thực hiện, bỏ việc lại lặp lại.... Cho đến khi trong tập đoàn chỉ còn lại duy nhất BT và anh thực hiện nhiệm vụ đầu tiên (và cũng là nhiệm vụ cuối cùng) trong tập đoàn. Tất nhiên cho đến lúc đó BT cũng thu được khá nhiều tiền. Tuy vậy anh ta cũng muốn biết số tiền mà mỗi nhân viên kiếm được khi làm việc cho tập đoàn.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương $𝑛\ (1 ≤ 𝑛 ≤ 2 ∙ 10^5)$;
- Dòng tiếp theo chứa $𝑛 − 1$ số nguyên $𝑎_2, 𝑎_3, … , 𝑎_𝑛\ (1 ≤ 𝑎_𝑖 < 𝑖, ∀𝑖 = 2, … , 𝑛)$ xác định $𝑎_𝑖$ là sếp của $𝑖$.

## Dữ liệu ra:
- In ra một dòng chứa $𝑛$ số nguyên, số thứ $𝑖$ là số tiền mà người $𝑖$ kiếm được $(𝑖 = 1 ÷ 𝑛)$.

## Ví dụ:
### Dữ liệu vào:
```
5
1 2 2 4
```

### Dữ liệu ra:
```
13 8 1 3 1
```

## Giới hạn:
- Có $50\%$ số test của bài có $𝑛 ≤ 5000$.